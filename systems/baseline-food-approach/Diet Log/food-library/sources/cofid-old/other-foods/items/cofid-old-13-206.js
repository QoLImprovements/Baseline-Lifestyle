/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 9 brands baby and sliced; boiled 5-12 minutes",
  "id": "cofid-old-13-206",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Carrots, frozen, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 4.7,
    "energy_kcal": 22.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.3,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 110.0,
    "protein_g": 0.4,
    "salt_g": 0.0875,
    "sat_fat_g": 0.1,
    "sodium_mg": 35.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 1075.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-206",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
