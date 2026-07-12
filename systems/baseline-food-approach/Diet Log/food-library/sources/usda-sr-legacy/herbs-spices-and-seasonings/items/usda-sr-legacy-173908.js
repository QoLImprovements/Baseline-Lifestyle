/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "packet-prepared",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173908",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "packet-prepared",
      "kind": "unit",
      "label": "packet, prepared"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Cereals, oats, instant, fortified, with raisins and spice, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 17.9,
    "energy_kcal": 88.0,
    "fat_g": 0.95,
    "fibre_g": 1.3,
    "folate_ug": 50.0,
    "iron_mg": 2.21,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 85.0,
    "protein_g": 1.98,
    "salt_g": 0.2775,
    "sat_fat_g": 0.15,
    "sodium_mg": 111.0,
    "sugar_g": 8.71,
    "vitamin_a_ug": 138.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173908",
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
