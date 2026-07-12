/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "muffin",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172764",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "muffin",
      "kind": "unit",
      "label": "muffin"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Muffins, plain, prepared from recipe, made with low fat (2%) milk",
  "nutritionPerBasis": {
    "calcium_mg": 200.0,
    "carbs_g": 41.4,
    "energy_kcal": 1240.0,
    "fat_g": 11.4,
    "fibre_g": 2.7,
    "folate_ug": 51.0,
    "iron_mg": 2.39,
    "magnesium_mg": 17.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 153.0,
    "potassium_mg": 121.0,
    "protein_g": 6.9,
    "salt_g": 1.1675,
    "sat_fat_g": 2.16,
    "sodium_mg": 467.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172764",
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
