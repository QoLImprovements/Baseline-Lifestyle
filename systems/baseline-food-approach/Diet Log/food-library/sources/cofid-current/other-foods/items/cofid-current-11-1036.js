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
  "id": "cofid-current-11-1036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Brandy snaps, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 72.1,
    "energy_kcal": 489.0,
    "fat_g": 22.5,
    "fibre_g": 1.2,
    "folate_ug": 2.0,
    "iron_mg": 1.13,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 80.0,
    "protein_g": 2.8,
    "salt_g": 0.68,
    "sat_fat_g": 14.16,
    "sodium_mg": 272.0,
    "sugar_g": 50.1,
    "vitamin_a_ug": 286.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 2.2
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1036",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
