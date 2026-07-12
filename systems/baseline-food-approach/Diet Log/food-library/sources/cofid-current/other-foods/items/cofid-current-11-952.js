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
  "id": "cofid-current-11-952",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, gingernut, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 70.0,
    "energy_kcal": 459.0,
    "fat_g": 19.8,
    "fibre_g": 2.1,
    "folate_ug": 4.0,
    "iron_mg": 1.92,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 223.0,
    "potassium_mg": 133.0,
    "protein_g": 4.5,
    "salt_g": 1.565,
    "sat_fat_g": 12.27,
    "sodium_mg": 626.0,
    "sugar_g": 32.6,
    "vitamin_a_ug": 246.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-952",
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
