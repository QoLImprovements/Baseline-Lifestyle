/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174953",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "portion-dough-spoon-from-roll",
      "kind": "unit",
      "label": "portion, dough spoon from roll"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, chocolate chip, refrigerated dough",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 61.0,
    "energy_kcal": 451.0,
    "fat_g": 21.3,
    "fibre_g": 1.5,
    "folate_ug": 57.0,
    "iron_mg": 2.0,
    "magnesium_mg": 24.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 69.0,
    "potassium_mg": 180.0,
    "protein_g": 3.98,
    "salt_g": 0.8025,
    "sat_fat_g": 8.39,
    "sodium_mg": 321.0,
    "sugar_g": 38.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174953",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
