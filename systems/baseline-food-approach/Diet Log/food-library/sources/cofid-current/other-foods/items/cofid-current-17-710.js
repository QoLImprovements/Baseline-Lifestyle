/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples, including Flora buttery spread and Pure Sunflower, dairy free",
  "id": "cofid-current-17-710",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fat spread, reduced fat (62-75%), polyunsaturated",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 0.6,
    "energy_kcal": 620.0,
    "fat_g": 68.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 6.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.4,
    "salt_g": 1.5,
    "sat_fat_g": 15.0,
    "sodium_mg": 600.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 800.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-710",
  "state": "Unspecified",
  "subcategory": "OA",
  "tags": [
    "oa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
