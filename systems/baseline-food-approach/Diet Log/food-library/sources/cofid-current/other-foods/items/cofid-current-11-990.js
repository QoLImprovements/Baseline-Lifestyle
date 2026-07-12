/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Chocolate recipe",
  "id": "cofid-current-11-990",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cakes, crispie, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 73.7,
    "energy_kcal": 460.0,
    "fat_g": 18.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.67,
    "magnesium_mg": 66.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 123.0,
    "potassium_mg": 232.0,
    "protein_g": 5.5,
    "salt_g": 0.4225,
    "sat_fat_g": 10.64,
    "sodium_mg": 169.0,
    "sugar_g": 43.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-990",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
