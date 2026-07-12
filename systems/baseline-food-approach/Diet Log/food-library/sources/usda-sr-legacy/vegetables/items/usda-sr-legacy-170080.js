/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-sliced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170080",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "pepper",
      "kind": "unit",
      "label": "pepper"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Peppers, jalapeno, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 4.74,
    "energy_kcal": 113.0,
    "fat_g": 0.94,
    "fibre_g": 2.6,
    "folate_ug": 14.0,
    "iron_mg": 1.88,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 193.0,
    "protein_g": 0.92,
    "salt_g": 4.175,
    "sat_fat_g": 0.097,
    "sodium_mg": 1670.0,
    "sugar_g": 2.14,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 12.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170080",
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
