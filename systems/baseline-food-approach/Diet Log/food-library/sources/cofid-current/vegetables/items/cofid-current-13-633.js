/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, UK and Dutch, including fresh and ready-cooked vacuum packed beetroot, no added vinegar. For fresh samples, top and root trimmed, peeled. Boiled for 1-2 hours",
  "id": "cofid-current-13-633",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beetroot, cooked in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 11.6,
    "energy_kcal": 53.0,
    "fat_g": 0.3,
    "fibre_g": 2.6,
    "folate_ug": 90.0,
    "iron_mg": 0.36,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 302.0,
    "protein_g": 1.6,
    "salt_g": 0.13,
    "sat_fat_g": 0.05,
    "sodium_mg": 52.0,
    "sugar_g": 10.9,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-633",
  "state": "Cooked",
  "subcategory": "DG",
  "tags": [
    "cooked",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
