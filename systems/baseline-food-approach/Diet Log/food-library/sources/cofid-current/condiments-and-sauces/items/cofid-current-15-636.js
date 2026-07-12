/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "8 samples, 4 products, including economy products",
  "id": "cofid-current-15-636",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coleslaw, with reduced calorie dressing, retail",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 6.5,
    "energy_kcal": 110.0,
    "fat_g": 9.1,
    "fibre_g": 1.6,
    "folate_ug": 56.0,
    "iron_mg": 0.23,
    "magnesium_mg": 8.0,
    "omega3_g": 0.73,
    "phosphorus_mg": 20.0,
    "potassium_mg": 175.0,
    "protein_g": 0.9,
    "salt_g": 0.4925,
    "sat_fat_g": 0.73,
    "sodium_mg": 197.0,
    "sugar_g": 6.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-636",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "condiments-and-sauces",
    "dr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
