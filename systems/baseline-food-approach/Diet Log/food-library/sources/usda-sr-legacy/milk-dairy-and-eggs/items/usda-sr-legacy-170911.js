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
  "id": "usda-sr-legacy-170911",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream, lowfat, no sugar added, cone, added peanuts and chocolate sauce",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 40.0,
    "energy_kcal": 1110.0,
    "fat_g": 9.33,
    "fibre_g": 9.3,
    "folate_ug": 17.0,
    "iron_mg": 0.48,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 143.0,
    "potassium_mg": 213.0,
    "protein_g": 5.33,
    "salt_g": 0.2825,
    "sat_fat_g": 6.6,
    "sodium_mg": 113.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170911",
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
