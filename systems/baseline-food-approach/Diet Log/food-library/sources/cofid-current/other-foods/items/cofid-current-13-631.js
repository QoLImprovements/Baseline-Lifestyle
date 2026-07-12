/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, UK, ends trimmed and peeled. Cut into chunks or slices, boiled for 8-12 minutes",
  "id": "cofid-current-13-631",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Parsnip, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 14.7,
    "energy_kcal": 66.0,
    "fat_g": 0.7,
    "fibre_g": 2.6,
    "folate_ug": 49.0,
    "iron_mg": 0.44,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 319.0,
    "protein_g": 1.2,
    "salt_g": 0.0075,
    "sat_fat_g": 0.12,
    "sodium_mg": 3.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-631",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
