/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 16-380 using edible conversion factor of 0.77",
  "id": "cofid-current-16-477",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sole, flesh only, grilled, fillets weighed with skin",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 71.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.4,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 200.0,
    "protein_g": 16.6,
    "salt_g": 0.29,
    "sat_fat_g": 0.12,
    "sodium_mg": 116.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-477",
  "state": "Grilled",
  "subcategory": "JA",
  "tags": [
    "grilled",
    "ja",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
