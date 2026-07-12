/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Boiled 4 minutes",
  "id": "cofid-current-13-580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beansprouts, mung, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 2.8,
    "energy_kcal": 25.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 2.2,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 46.0,
    "protein_g": 2.5,
    "salt_g": 0.01,
    "sat_fat_g": 0.1,
    "sodium_mg": 4.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-580",
  "state": "Boiled",
  "subcategory": "DB",
  "tags": [
    "boiled",
    "db",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
