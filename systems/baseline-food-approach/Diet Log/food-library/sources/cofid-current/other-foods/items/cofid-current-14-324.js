/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "19 samples, summer and autumn, UK grown and imported, including Elsanta, Sonata, Ava, Portola and unspecified varieties",
  "id": "cofid-current-14-324",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Strawberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 6.1,
    "energy_kcal": 30.0,
    "fat_g": 0.5,
    "fibre_g": 3.8,
    "folate_ug": 61.0,
    "iron_mg": 0.25,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 170.0,
    "protein_g": 0.6,
    "salt_g": 0.0025,
    "sat_fat_g": 0.04,
    "sodium_mg": 1.0,
    "sugar_g": 6.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 57.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 3.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-324",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
