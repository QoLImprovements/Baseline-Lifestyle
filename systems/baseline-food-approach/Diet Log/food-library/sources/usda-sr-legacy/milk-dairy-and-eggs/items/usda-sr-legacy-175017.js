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
  "id": "usda-sr-legacy-175017",
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
      "gramsPerUnit": 94.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
    }
  ],
  "name": "Pie, coconut cream, prepared from mix, no-bake type",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 28.5,
    "energy_kcal": 1160.0,
    "fat_g": 17.6,
    "fibre_g": 0.5,
    "folate_ug": 15.0,
    "iron_mg": 0.4,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 169.0,
    "potassium_mg": 141.0,
    "protein_g": 2.8,
    "salt_g": 0.8225,
    "sat_fat_g": 8.93,
    "sodium_mg": 329.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175017",
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
