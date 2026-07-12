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
  "id": "usda-sr-legacy-170910",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, chocolate, lowfat, reduced sugar",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 7.68,
    "energy_kcal": 57.0,
    "fat_g": 1.04,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.16,
    "magnesium_mg": 13.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 98.0,
    "potassium_mg": 168.0,
    "protein_g": 3.43,
    "salt_g": 0.165,
    "sat_fat_g": 0.616,
    "sodium_mg": 66.0,
    "sugar_g": 7.29,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170910",
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
