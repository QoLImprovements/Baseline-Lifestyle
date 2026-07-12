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
  "id": "cofid-current-19-625",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmis of pheasant, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 2.4,
    "energy_kcal": 106.0,
    "fat_g": 5.6,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.91,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 168.0,
    "protein_g": 9.9,
    "salt_g": 0.5475,
    "sat_fat_g": 0.0,
    "sodium_mg": 219.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-625",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
