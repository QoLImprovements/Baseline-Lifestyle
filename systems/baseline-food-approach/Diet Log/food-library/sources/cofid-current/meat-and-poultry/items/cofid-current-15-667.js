/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe from Leeds Polytechnic",
  "id": "cofid-current-15-667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beanburger, red kidney bean, fried in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 21.7,
    "energy_kcal": 202.0,
    "fat_g": 10.7,
    "fibre_g": 0.0,
    "folate_ug": 57.0,
    "iron_mg": 1.98,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 148.0,
    "potassium_mg": 298.0,
    "protein_g": 6.2,
    "salt_g": 0.1775,
    "sat_fat_g": 0.85,
    "sodium_mg": 71.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 346.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.26,
    "vitamin_k_ug": 11.14
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-667",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
