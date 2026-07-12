/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170024",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup chopped"
    }
  ],
  "name": "Peppers, sweet, green, sauteed",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 4.22,
    "energy_kcal": 486.0,
    "fat_g": 11.8,
    "fibre_g": 1.8,
    "folate_ug": 2.0,
    "iron_mg": 0.3,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 134.0,
    "protein_g": 0.78,
    "salt_g": 0.0425,
    "sat_fat_g": 1.59,
    "sodium_mg": 17.0,
    "sugar_g": 2.17,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 177.0,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 21.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170024",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
