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
  "id": "usda-sr-legacy-172760",
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
      "gramsPerUnit": 52.0,
      "key": "muffin",
      "kind": "unit",
      "label": "muffin"
    }
  ],
  "name": "Muffins, English, raisin-cinnamon, toasted (includes apple-cinnamon)",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 55.0,
    "energy_kcal": 1150.0,
    "fat_g": 2.21,
    "fibre_g": 3.0,
    "folate_ug": 86.0,
    "iron_mg": 4.9,
    "magnesium_mg": 28.0,
    "omega3_g": 0.046,
    "phosphorus_mg": 108.0,
    "potassium_mg": 194.0,
    "protein_g": 8.87,
    "salt_g": 0.855,
    "sat_fat_g": 0.579,
    "sodium_mg": 342.0,
    "sugar_g": 13.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172760",
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
