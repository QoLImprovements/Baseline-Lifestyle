/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Ends trimmed and peeled",
  "id": "cofid-current-13-312",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Parsnip, raw",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 12.5,
    "energy_kcal": 64.0,
    "fat_g": 1.1,
    "fibre_g": 4.7,
    "folate_ug": 87.0,
    "iron_mg": 0.6,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 450.0,
    "protein_g": 1.8,
    "salt_g": 0.025,
    "sat_fat_g": 0.2,
    "sodium_mg": 10.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 0.05
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-312",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
