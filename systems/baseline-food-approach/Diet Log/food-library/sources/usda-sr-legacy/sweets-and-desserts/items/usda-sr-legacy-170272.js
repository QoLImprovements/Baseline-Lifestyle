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
  "id": "usda-sr-legacy-170272",
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
      "gramsPerUnit": 112.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Chocolate, dark, 60-69% cacao solids",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 52.4,
    "energy_kcal": 579.0,
    "fat_g": 38.3,
    "fibre_g": 8.0,
    "folate_ug": 0.0,
    "iron_mg": 6.32,
    "magnesium_mg": 176.0,
    "omega3_g": 0.088,
    "phosphorus_mg": 260.0,
    "potassium_mg": 567.0,
    "protein_g": 6.12,
    "salt_g": 0.025,
    "sat_fat_g": 22.0,
    "sodium_mg": 10.0,
    "sugar_g": 36.7,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170272",
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
