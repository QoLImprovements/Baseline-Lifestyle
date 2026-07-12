/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169286",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 214.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Spinach, canned, regular pack, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 3.4,
    "energy_kcal": 96.0,
    "fat_g": 0.5,
    "fibre_g": 2.4,
    "folate_ug": 98.0,
    "iron_mg": 2.3,
    "magnesium_mg": 76.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 346.0,
    "protein_g": 2.81,
    "salt_g": 0.805,
    "sat_fat_g": 0.081,
    "sodium_mg": 322.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 490.0,
    "vitamin_c_mg": 14.3,
    "vitamin_e_mg": 1.94,
    "vitamin_k_ug": 462.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169286",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
