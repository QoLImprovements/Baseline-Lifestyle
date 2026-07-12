/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171308",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, half and half, lowfat",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 3.33,
    "energy_kcal": 300.0,
    "fat_g": 5.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 95.0,
    "potassium_mg": 132.0,
    "protein_g": 3.33,
    "salt_g": 0.125,
    "sat_fat_g": 3.28,
    "sodium_mg": 50.0,
    "sugar_g": 3.33,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171308",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
