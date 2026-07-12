/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "onion",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170003",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "onion",
      "kind": "unit",
      "label": "onion"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "0-5-cup-chopped-or-diced",
      "kind": "unit",
      "label": "0.5 cup, chopped or diced"
    }
  ],
  "name": "Onions, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 4.02,
    "energy_kcal": 19.0,
    "fat_g": 0.09,
    "fibre_g": 1.2,
    "folate_ug": 10.0,
    "iron_mg": 0.13,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 111.0,
    "protein_g": 0.85,
    "salt_g": 0.9275,
    "sat_fat_g": 0.016,
    "sodium_mg": 371.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170003",
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
