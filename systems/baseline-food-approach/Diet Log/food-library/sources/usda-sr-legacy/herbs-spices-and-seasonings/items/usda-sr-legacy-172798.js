/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "roll",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172798",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Sweet rolls, cinnamon, refrigerated dough with frosting",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 51.6,
    "energy_kcal": 1390.0,
    "fat_g": 12.2,
    "fibre_g": 0.0,
    "folate_ug": 50.0,
    "iron_mg": 2.44,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 321.0,
    "potassium_mg": 58.0,
    "protein_g": 5.0,
    "salt_g": 1.9125,
    "sat_fat_g": 3.08,
    "sodium_mg": 765.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172798",
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
