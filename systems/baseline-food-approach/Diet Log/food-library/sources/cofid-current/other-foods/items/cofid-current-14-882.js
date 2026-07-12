/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from recipe proportions, plain peanuts 56% and raisins 44%",
  "id": "cofid-current-14-882",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peanuts and raisins",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 37.5,
    "energy_kcal": 436.0,
    "fat_g": 25.9,
    "fibre_g": 0.0,
    "folate_ug": 66.0,
    "iron_mg": 3.07,
    "magnesium_mg": 133.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 274.0,
    "potassium_mg": 824.0,
    "protein_g": 15.4,
    "salt_g": 0.07,
    "sat_fat_g": 4.9,
    "sodium_mg": 28.0,
    "sugar_g": 34.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.65,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-882",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
