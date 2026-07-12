/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "3-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168003",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "3-cookies",
      "kind": "unit",
      "label": "3 cookies"
    }
  ],
  "name": "Glutino, Gluten Free Wafers, Milk Chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 62.8,
    "energy_kcal": 2260.0,
    "fat_g": 30.4,
    "fibre_g": 1.6,
    "folate_ug": 0.0,
    "iron_mg": 3.67,
    "magnesium_mg": 41.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 144.0,
    "potassium_mg": 340.0,
    "protein_g": 4.06,
    "salt_g": 0.305,
    "sat_fat_g": 15.3,
    "sodium_mg": 122.0,
    "sugar_g": 41.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168003",
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
