/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkish delight, with nuts, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 82.0,
    "energy_kcal": 348.0,
    "fat_g": 2.6,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.4,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 53.0,
    "protein_g": 4.1,
    "salt_g": 0.2125,
    "sat_fat_g": 0.35,
    "sodium_mg": 85.0,
    "sugar_g": 81.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-593",
  "state": "Unspecified",
  "subcategory": "SEC",
  "tags": [
    "other-foods",
    "sec",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
