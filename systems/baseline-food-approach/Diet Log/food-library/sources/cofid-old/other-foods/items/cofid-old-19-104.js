/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Australian smoked pork sausage. Literature sources and manufacturers' data",
  "id": "cofid-old-19-104",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kabana",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.6,
    "energy_kcal": 308.0,
    "fat_g": 26.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.8,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 240.0,
    "protein_g": 16.7,
    "salt_g": 2.2,
    "sat_fat_g": 11.4,
    "sodium_mg": 880.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 31.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-104",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "mi",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
