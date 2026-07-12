/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 assorted samples; whole contents",
  "id": "cofid-old-17-350",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pickle, mango, oily",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 9.4,
    "energy_kcal": 177.0,
    "fat_g": 15.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 8.6,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 170.0,
    "protein_g": 1.8,
    "salt_g": 8.2,
    "sat_fat_g": 0.0,
    "sodium_mg": 3280.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-350",
  "state": "Unspecified",
  "subcategory": "WE",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "we"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
