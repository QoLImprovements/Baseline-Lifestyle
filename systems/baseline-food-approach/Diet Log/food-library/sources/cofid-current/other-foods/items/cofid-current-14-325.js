/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "21 samples, summer and winter, UK grown and imported",
  "id": "cofid-current-14-325",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Blueberries",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 9.1,
    "energy_kcal": 40.0,
    "fat_g": 0.2,
    "fibre_g": 1.5,
    "folate_ug": 8.0,
    "iron_mg": 0.55,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 66.0,
    "protein_g": 0.9,
    "salt_g": 0.005,
    "sat_fat_g": 0.02,
    "sodium_mg": 2.0,
    "sugar_g": 9.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-325",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
