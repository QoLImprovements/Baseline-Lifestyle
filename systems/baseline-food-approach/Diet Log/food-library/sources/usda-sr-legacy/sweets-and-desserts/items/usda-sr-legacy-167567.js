/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167567",
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
    }
  ],
  "name": "Baking chocolate, unsweetened, liquid",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 36.2,
    "energy_kcal": 472.0,
    "fat_g": 47.7,
    "fibre_g": 18.1,
    "folate_ug": 19.0,
    "iron_mg": 4.15,
    "magnesium_mg": 265.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 340.0,
    "potassium_mg": 1170.0,
    "protein_g": 12.1,
    "salt_g": 0.03,
    "sat_fat_g": 25.3,
    "sodium_mg": 12.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167567",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
