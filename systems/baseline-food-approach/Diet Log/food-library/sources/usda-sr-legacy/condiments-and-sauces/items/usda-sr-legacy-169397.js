/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pickles, chowchow, with cauliflower onion mustard, sweet",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 26.6,
    "energy_kcal": 121.0,
    "fat_g": 0.9,
    "fibre_g": 1.5,
    "folate_ug": 5.0,
    "iron_mg": 1.4,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 200.0,
    "protein_g": 1.5,
    "salt_g": 1.3175,
    "sat_fat_g": 0.149,
    "sodium_mg": 527.0,
    "sugar_g": 23.9,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 61.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169397",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
