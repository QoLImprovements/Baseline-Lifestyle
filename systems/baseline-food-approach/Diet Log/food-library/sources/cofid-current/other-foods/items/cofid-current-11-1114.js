/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe. Ref. Wiles et al. (1980)",
  "id": "cofid-current-11-1114",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Scones, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 46.6,
    "energy_kcal": 319.0,
    "fat_g": 12.3,
    "fibre_g": 5.8,
    "folate_ug": 10.0,
    "iron_mg": 1.44,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 539.0,
    "potassium_mg": 269.0,
    "protein_g": 8.2,
    "salt_g": 1.505,
    "sat_fat_g": 4.08,
    "sodium_mg": 602.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1114",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
