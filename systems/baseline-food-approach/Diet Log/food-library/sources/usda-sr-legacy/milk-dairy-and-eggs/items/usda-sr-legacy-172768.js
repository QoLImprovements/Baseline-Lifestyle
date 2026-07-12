/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172768",
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
      "gramsPerUnit": 57.0,
      "key": "muffin",
      "kind": "unit",
      "label": "muffin"
    }
  ],
  "name": "Muffins, blueberry, prepared from recipe, made with low fat (2%) milk",
  "nutritionPerBasis": {
    "calcium_mg": 189.0,
    "carbs_g": 40.7,
    "energy_kcal": 1190.0,
    "fat_g": 10.8,
    "fibre_g": 0.0,
    "folate_ug": 48.0,
    "iron_mg": 2.27,
    "magnesium_mg": 16.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 145.0,
    "potassium_mg": 123.0,
    "protein_g": 6.5,
    "salt_g": 1.1025,
    "sat_fat_g": 2.03,
    "sodium_mg": 441.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172768",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
