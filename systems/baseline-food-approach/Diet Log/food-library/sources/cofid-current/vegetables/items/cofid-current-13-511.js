/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "As raw, boiled for 4-8 minutes",
  "id": "cofid-current-13-511",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cabbage, green, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 2.3,
    "energy_kcal": 17.0,
    "fat_g": 0.2,
    "fibre_g": 2.2,
    "folate_ug": 40.0,
    "iron_mg": 0.4,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 187.0,
    "protein_g": 1.5,
    "salt_g": 0.0125,
    "sat_fat_g": 0.04,
    "sodium_mg": 5.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 45.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 201.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-511",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
