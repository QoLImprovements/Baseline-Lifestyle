/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "g",
  "description": "Fermented soya bean cake. Literature sources",
  "id": "cofid-current-13-118",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tempeh",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 6.4,
    "energy_kcal": 166.0,
    "fat_g": 6.4,
    "fibre_g": 0.0,
    "folate_ug": 76.0,
    "iron_mg": 3.6,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 370.0,
    "protein_g": 20.7,
    "salt_g": 0.015,
    "sat_fat_g": 0.0,
    "sodium_mg": 6.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-118",
  "state": "Unspecified",
  "subcategory": "DB",
  "tags": [
    "db",
    "soy-and-plant-proteins",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
