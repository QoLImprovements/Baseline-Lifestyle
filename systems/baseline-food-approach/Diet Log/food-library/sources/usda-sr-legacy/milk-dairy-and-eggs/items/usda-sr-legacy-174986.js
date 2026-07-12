/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cream-puff-shell",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174986",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "cream-puff-shell",
      "kind": "unit",
      "label": "cream puff shell"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "eclair-5-x-2-x-1-3-4",
      "kind": "unit",
      "label": "eclair (5\" x 2\" x 1-3/4\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cream puff shell, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 22.8,
    "energy_kcal": 1510.0,
    "fat_g": 25.9,
    "fibre_g": 0.8,
    "folate_ug": 53.0,
    "iron_mg": 2.02,
    "magnesium_mg": 12.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 119.0,
    "potassium_mg": 97.0,
    "protein_g": 9.0,
    "salt_g": 1.2075,
    "sat_fat_g": 5.6,
    "sodium_mg": 483.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 288.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.85,
    "vitamin_k_ug": 24.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174986",
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
