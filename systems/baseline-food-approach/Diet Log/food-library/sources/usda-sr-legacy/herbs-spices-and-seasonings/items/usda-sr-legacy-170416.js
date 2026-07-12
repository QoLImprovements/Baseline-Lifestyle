/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170416",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup chopped"
    },
    {
      "gramsPerUnit": 3.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "10-sprigs",
      "kind": "unit",
      "label": "10 sprigs"
    }
  ],
  "name": "Parsley, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 6.33,
    "energy_kcal": 36.0,
    "fat_g": 0.79,
    "fibre_g": 3.3,
    "folate_ug": 152.0,
    "iron_mg": 6.2,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 554.0,
    "protein_g": 2.97,
    "salt_g": 0.14,
    "sat_fat_g": 0.132,
    "sodium_mg": 56.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 421.0,
    "vitamin_c_mg": 133.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 1640.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170416",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "herbs-spices-and-seasonings",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
