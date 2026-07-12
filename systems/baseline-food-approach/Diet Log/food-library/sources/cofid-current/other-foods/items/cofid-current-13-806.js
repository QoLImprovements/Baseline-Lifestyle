/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Reviewed 2013. LGC, Fruit and Vegetables, 1989-1990; Polacchi et al. (1982) Food composition tables for the near east; and Leung et al. (1972) Food composition table for use in East Asia",
  "id": "cofid-current-13-806",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bay leaf, dried",
  "nutritionPerBasis": {
    "calcium_mg": 830.0,
    "carbs_g": 48.6,
    "energy_kcal": 313.0,
    "fat_g": 8.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 43.0,
    "magnesium_mg": 120.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 530.0,
    "protein_g": 7.6,
    "salt_g": 0.0575,
    "sat_fat_g": 2.3,
    "sodium_mg": 23.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 620.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-806",
  "state": "Dried",
  "subcategory": "H",
  "tags": [
    "dried",
    "h",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
