/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 7 products, containing butter and vegetable oil, including Anchor, Lurpak, Country Life and own brand equivalents",
  "id": "cofid-current-17-655",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Butter, spreadable (75-80% fat)",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.5,
    "energy_kcal": 715.0,
    "fat_g": 79.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.04,
    "magnesium_mg": 1.0,
    "omega3_g": 2.55,
    "phosphorus_mg": 12.0,
    "potassium_mg": 16.0,
    "protein_g": 0.4,
    "salt_g": 1.21,
    "sat_fat_g": 34.15,
    "sodium_mg": 484.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 562.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 10.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-655",
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
