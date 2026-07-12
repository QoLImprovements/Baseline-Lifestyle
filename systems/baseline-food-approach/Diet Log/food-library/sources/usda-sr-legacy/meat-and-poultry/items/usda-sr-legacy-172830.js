/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "wing",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172830",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "wing",
      "kind": "unit",
      "label": "wing"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broiler, rotisserie, BBQ, wing, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.6,
    "energy_kcal": 257.0,
    "fat_g": 18.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.93,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 251.0,
    "potassium_mg": 285.0,
    "protein_g": 23.4,
    "salt_g": 1.4475,
    "sat_fat_g": 4.63,
    "sodium_mg": 579.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172830",
  "state": "Unspecified",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
