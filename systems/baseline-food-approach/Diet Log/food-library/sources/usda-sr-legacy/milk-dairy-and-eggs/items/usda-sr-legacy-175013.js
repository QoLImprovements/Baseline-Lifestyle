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
  "id": "usda-sr-legacy-175013",
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
      "gramsPerUnit": 92.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "piece-1-6-of-8-pie",
      "kind": "unit",
      "label": "piece (1/6 of 8\" pie)"
    }
  ],
  "name": "Pie, banana cream, prepared from mix, no-bake type",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 31.6,
    "energy_kcal": 1050.0,
    "fat_g": 12.9,
    "fibre_g": 0.6,
    "folate_ug": 21.0,
    "iron_mg": 0.46,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 167.0,
    "potassium_mg": 113.0,
    "protein_g": 3.4,
    "salt_g": 0.725,
    "sat_fat_g": 6.9,
    "sodium_mg": 290.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175013",
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
