/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 3 retail, 3 homemade, hot dessert of carrots cooked in cream",
  "id": "cofid-current-11-913",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gajjeralla",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 39.3,
    "energy_kcal": 272.0,
    "fat_g": 12.3,
    "fibre_g": 2.1,
    "folate_ug": 0.0,
    "iron_mg": 0.36,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 321.0,
    "protein_g": 3.6,
    "salt_g": 0.2325,
    "sat_fat_g": 4.81,
    "sodium_mg": 93.0,
    "sugar_g": 39.3,
    "vitamin_a_ug": 494.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.76,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-913",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
