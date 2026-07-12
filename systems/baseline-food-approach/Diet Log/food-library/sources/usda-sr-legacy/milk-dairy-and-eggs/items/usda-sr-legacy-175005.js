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
  "id": "usda-sr-legacy-175005",
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
      "key": "muffin-2-3-4-dia-x-2",
      "kind": "unit",
      "label": "muffin (2-3/4\" dia x 2\")"
    }
  ],
  "name": "Muffins, corn, prepared from recipe, made with low fat (2%) milk",
  "nutritionPerBasis": {
    "calcium_mg": 259.0,
    "carbs_g": 44.2,
    "energy_kcal": 1320.0,
    "fat_g": 12.3,
    "fibre_g": 0.0,
    "folate_ug": 75.0,
    "iron_mg": 2.61,
    "magnesium_mg": 23.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 177.0,
    "potassium_mg": 145.0,
    "protein_g": 7.1,
    "salt_g": 1.4625,
    "sat_fat_g": 2.31,
    "sodium_mg": 585.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 241.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175005",
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
