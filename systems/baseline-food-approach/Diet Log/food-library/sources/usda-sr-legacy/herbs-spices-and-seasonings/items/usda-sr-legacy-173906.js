/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "tbsp",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173906",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "packet-prepared",
      "kind": "unit",
      "label": "packet, prepared"
    }
  ],
  "name": "Cereals, oats, instant, fortified, with cinnamon and spice, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 19.0,
    "energy_kcal": 402.0,
    "fat_g": 1.21,
    "fibre_g": 2.0,
    "folate_ug": 48.0,
    "iron_mg": 2.11,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 71.0,
    "protein_g": 2.37,
    "salt_g": 0.2775,
    "sat_fat_g": 0.191,
    "sodium_mg": 111.0,
    "sugar_g": 6.31,
    "vitamin_a_ug": 110.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173906",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
