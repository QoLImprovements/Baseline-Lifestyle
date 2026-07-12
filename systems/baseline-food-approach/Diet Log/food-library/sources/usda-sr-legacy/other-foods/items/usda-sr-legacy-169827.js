/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "oz",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169827",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 0.4,
      "key": "nut",
      "kind": "unit",
      "label": "nut"
    }
  ],
  "name": "Hazelnuts, beaked (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 441.0,
    "carbs_g": 23.0,
    "energy_kcal": 628.0,
    "fat_g": 53.0,
    "fibre_g": 9.8,
    "folate_ug": 0.0,
    "iron_mg": 3.12,
    "magnesium_mg": 235.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 411.0,
    "potassium_mg": 738.0,
    "protein_g": 14.9,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169827",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
