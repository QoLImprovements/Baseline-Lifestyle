/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174997",
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
  "name": "Muffins, English, raisin-cinnamon (includes apple-cinnamon)",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 48.1,
    "energy_kcal": 240.0,
    "fat_g": 1.8,
    "fibre_g": 2.6,
    "folate_ug": 74.0,
    "iron_mg": 4.5,
    "magnesium_mg": 23.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 91.0,
    "potassium_mg": 173.0,
    "protein_g": 7.91,
    "salt_g": 0.7475,
    "sat_fat_g": 0.54,
    "sodium_mg": 299.0,
    "sugar_g": 14.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174997",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
