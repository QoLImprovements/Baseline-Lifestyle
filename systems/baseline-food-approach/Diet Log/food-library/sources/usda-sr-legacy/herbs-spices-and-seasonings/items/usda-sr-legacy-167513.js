/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "serving-1-roll-with-icing",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167513",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "serving-1-roll-with-icing",
      "kind": "unit",
      "label": "serving 1 roll with icing"
    }
  ],
  "name": "Pillsbury, Cinnamon Rolls with Icing, refrigerated dough",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 53.4,
    "energy_kcal": 1380.0,
    "fat_g": 11.3,
    "fibre_g": 1.4,
    "folate_ug": 0.0,
    "iron_mg": 1.93,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 4.34,
    "salt_g": 1.95,
    "sat_fat_g": 3.25,
    "sodium_mg": 780.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167513",
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
