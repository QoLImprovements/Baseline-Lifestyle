/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples from UK and Spain, ends trimmed. Cut into chunks or slices and boiled for 3-8 minutes",
  "id": "cofid-current-13-628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Courgette, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 1.8,
    "energy_kcal": 15.0,
    "fat_g": 0.3,
    "fibre_g": 0.8,
    "folate_ug": 20.6,
    "iron_mg": 0.37,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 238.0,
    "protein_g": 1.3,
    "salt_g": 0.0,
    "sat_fat_g": 0.08,
    "sodium_mg": 0.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 32.5,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-628",
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
