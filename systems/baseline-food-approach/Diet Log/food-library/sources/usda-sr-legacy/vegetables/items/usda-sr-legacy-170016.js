/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peas, green, frozen, unprepared (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 13.6,
    "energy_kcal": 77.0,
    "fat_g": 0.4,
    "fibre_g": 4.5,
    "folate_ug": 53.0,
    "iron_mg": 1.53,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 153.0,
    "protein_g": 5.22,
    "salt_g": 0.27,
    "sat_fat_g": 0.066,
    "sodium_mg": 108.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 103.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 27.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170016",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
